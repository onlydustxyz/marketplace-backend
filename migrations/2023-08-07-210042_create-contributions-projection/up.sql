CREATE TYPE contribution_type AS enum('ISSUE', 'PULL_REQUEST', 'CODE_REVIEW');


CREATE TABLE
    contributions (
        repo_id BIGINT NOT NULL,
        user_id BIGINT NOT NULL,
        type contribution_type NOT NULL,
        details_id BIGINT NOT NULL,
        PRIMARY KEY (
            type,
            details_id,
            user_id
        )
    );