UPDATE contributions c
SET
    "status" = (
        CASE
            WHEN gi.status = 'open'::github_issue_status THEN 'in_progress'::contribution_status
            WHEN gi.status = 'completed'::github_issue_status THEN 'complete'::contribution_status
            WHEN gi.status = 'cancelled'::github_issue_status THEN 'canceled'::contribution_status
        END
    ),
    created_at = gi.created_at,
    closed_at = gi.closed_at
FROM
    github_issues gi
WHERE
    c."type" = 'ISSUE'::contribution_type
    AND gi.id = c.details_id::BIGINT;


UPDATE contributions c
SET
    "status" = (
        CASE
            WHEN pr.status = 'open'::github_pull_request_status THEN 'in_progress'::contribution_status
            WHEN pr.status = 'merged'::github_pull_request_status THEN 'complete'::contribution_status
            WHEN pr.status = 'closed'::github_pull_request_status THEN 'canceled'::contribution_status
        END
    ),
    created_at = pr.created_at,
    closed_at = pr.closed_at
FROM
    github_pull_requests pr
WHERE
    c."type" = 'PULL_REQUEST'::contribution_type
    AND pr.id = c.details_id::BIGINT;


UPDATE contributions c
SET
    "status" = (
        CASE
            WHEN r.status = 'pending'::github_code_review_status THEN 'in_progress'::contribution_status
            WHEN r.status = 'completed'::github_code_review_status THEN 'complete'::contribution_status
        END
    ),
    created_at = pr.created_at,
    closed_at = (
        CASE
            WHEN r.status = 'pending'::github_code_review_status THEN NULL
            WHEN r.status = 'completed'::github_code_review_status THEN r.submitted_at
        END
    )
FROM
    github_pull_request_reviews r
    JOIN github_pull_requests pr ON pr.id = r.pull_request_id
WHERE
    c."type" = 'CODE_REVIEW'::contribution_type
    AND r.id = c.details_id;


TRUNCATE TABLE projects_contributors;


TRUNCATE TABLE projects_pending_contributors;


INSERT INTO
    projects_contributors (project_id, github_user_id)
SELECT DISTINCT
    pgr.project_id,
    c.user_id
FROM
    contributions c
    JOIN project_github_repos pgr ON pgr.github_repo_id = c.repo_id
WHERE
    c.status = 'complete'::contribution_status;


INSERT INTO
    projects_pending_contributors (project_id, github_user_id)
SELECT DISTINCT
    pgr.project_id,
    c.user_id
FROM
    contributions c
    JOIN project_github_repos pgr ON pgr.github_repo_id = c.repo_id;