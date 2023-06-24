CREATE OR REPLACE VIEW
    api.projects_contributors_for_caller AS
SELECT
    project_id,
    github_user_id
FROM
    projects_contributors;