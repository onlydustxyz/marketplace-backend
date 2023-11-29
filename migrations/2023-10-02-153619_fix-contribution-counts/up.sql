CREATE OR REPLACE VIEW
    api.contribution_counts AS
SELECT
    c.github_user_id,
    DATE_PART('isoyear'::TEXT, c.created_at) AS "year",
    DATE_PART('week'::TEXT, c.created_at) AS "week",
    COUNT(DISTINCT c.details_id) FILTER (
        WHERE
            c.type = 'ISSUE'::contribution_type
    ) AS issue_count,
    COUNT(DISTINCT c.details_id) FILTER (
        WHERE
            c.type = 'CODE_REVIEW'::contribution_type
    ) AS code_review_count,
    COUNT(DISTINCT c.details_id) FILTER (
        WHERE
            c.type = 'PULL_REQUEST'::contribution_type
    ) AS pull_request_count
FROM
    api.completed_contributions c
GROUP BY
    c.github_user_id,
    "year",
    "week";