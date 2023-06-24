SELECT
    COALESCE(JSON_AGG("root"), '[]') AS "root"
FROM
    (
        SELECT
            ROW_TO_JSON(
                (
                    SELECT
                        "_e"
                    FROM
                        (
                            SELECT
                                "_root.base"."id" AS "id",
                                'Projects' AS "__typename",
                                "_root.or.projectDetails"."projectDetails" AS "projectDetails",
                                "_root.ar.root.githubRepos.githubReposAggregate"."githubReposAggregate" AS "githubReposAggregate",
                                "_root.ar.root.projectLeads"."projectLeads" AS "projectLeads",
                                "_root.ar.root.budgetsAggregate"."budgetsAggregate" AS "budgetsAggregate",
                                "_root.ar.root.callerAsContributor"."callerAsContributor" AS "callerAsContributor",
                                "_root.ar.root.pendingInvitations"."pendingInvitations" AS "pendingInvitations",
                                "_root.ar.root.githubRepos.githubReposAggregate"."githubRepos" AS "githubRepos",
                                "_root.ar.root.projectSponsors"."projectSponsors" AS "projectSponsors"
                        ) AS "_e"
                )
            ) AS "root"
        FROM
            (
                SELECT
                    *
                FROM
                    "public"."projects"
                WHERE
                    ('true')
            ) AS "_root.base"
            LEFT OUTER JOIN LATERAL (
                SELECT
                    ROW_TO_JSON(
                        (
                            SELECT
                                "_e"
                            FROM
                                (
                                    SELECT
                                        "_root.or.projectDetails.base"."project_id" AS "projectId",
                                        "_root.or.projectDetails.base"."visibility" AS "visibility",
                                        'ProjectDetails' AS "__typename"
                                ) AS "_e"
                        )
                    ) AS "projectDetails"
                FROM
                    (
                        SELECT
                            *
                        FROM
                            "public"."project_details"
                        WHERE
                            (("_root.base"."id") = ("project_id"))
                        LIMIT
                            1
                    ) AS "_root.or.projectDetails.base"
            ) AS "_root.or.projectDetails" ON ('true')
            LEFT OUTER JOIN LATERAL (
                SELECT
                    JSON_BUILD_OBJECT(
                        'aggregate',
                        JSON_BUILD_OBJECT('count', COUNT(*), '__typename', 'BudgetsAggregateFields'),
                        '__typename',
                        COALESCE('BudgetsAggregate', (BOOL_OR('true'))::TEXT)
                    ) AS "budgetsAggregate"
                FROM
                    (
                        SELECT
                            1
                        FROM
                            (
                                SELECT
                                    *
                                FROM
                                    "public"."budgets"
                                WHERE
                                    (("_root.base"."id") = ("project_id"))
                            ) AS "_root.ar.root.budgetsAggregate.base"
                    ) AS "_root.ar.root.budgetsAggregate"
            ) AS "_root.ar.root.budgetsAggregate" ON ('true')
            LEFT OUTER JOIN LATERAL (
                SELECT
                    COALESCE(JSON_AGG("pendingInvitations"), '[]') AS "pendingInvitations"
                FROM
                    (
                        SELECT
                            ROW_TO_JSON(
                                (
                                    SELECT
                                        "_e"
                                    FROM
                                        (
                                            SELECT
                                                "_root.ar.root.pendingInvitations.base"."id" AS "id",
                                                "_root.ar.root.pendingInvitations.base"."github_user_id" AS "githubUserId",
                                                'PendingProjectLeaderInvitations' AS "__typename"
                                        ) AS "_e"
                                )
                            ) AS "pendingInvitations"
                        FROM
                            (
                                SELECT
                                    *
                                FROM
                                    "public"."pending_project_leader_invitations"
                                WHERE
                                    (
                                        (("_root.base"."id") = ("project_id"))
                                        AND (
                                            ('true')
                                            OR ('true')
                                        )
                                    )
                            ) AS "_root.ar.root.pendingInvitations.base"
                    ) AS "_root.ar.root.pendingInvitations"
            ) AS "_root.ar.root.pendingInvitations" ON ('true')
            LEFT OUTER JOIN LATERAL (
                SELECT
                    COALESCE(
                        JSON_AGG(
                            "projectLeads"
                            ORDER BY
                                "root.ar.root.projectLeads.or.user.pg.github_user_id" ASC NULLS LAST
                        ),
                        '[]'
                    ) AS "projectLeads"
                FROM
                    (
                        SELECT
                            "_root.ar.root.projectLeads.or.user"."root.ar.root.projectLeads.or.user.pg.github_user_id" AS "root.ar.root.projectLeads.or.user.pg.github_user_id",
                            ROW_TO_JSON(
                                (
                                    SELECT
                                        "_e"
                                    FROM
                                        (
                                            SELECT
                                                "_root.ar.root.projectLeads.base"."user_id" AS "userId",
                                                'ProjectLeads' AS "__typename",
                                                "_root.ar.root.projectLeads.base"."project_id" AS "projectId",
                                                "_root.ar.root.projectLeads.or.user"."user" AS "user"
                                        ) AS "_e"
                                )
                            ) AS "projectLeads"
                        FROM
                            (
                                SELECT
                                    *
                                FROM
                                    "public"."project_leads"
                                WHERE
                                    (("_root.base"."id") = ("project_id"))
                            ) AS "_root.ar.root.projectLeads.base"
                            LEFT OUTER JOIN LATERAL (
                                SELECT
                                    ROW_TO_JSON(
                                        (
                                            SELECT
                                                "_e"
                                            FROM
                                                (
                                                    SELECT
                                                        "_root.ar.root.projectLeads.or.user.base"."id" AS "id",
                                                        'RegisteredUsers' AS "__typename",
                                                        "_root.ar.root.projectLeads.or.user.base"."login" AS "login",
                                                        "_root.ar.root.projectLeads.or.user.base"."avatar_url" AS "avatarUrl",
                                                        "_root.ar.root.projectLeads.or.user.base"."github_user_id" AS "githubUserId"
                                                ) AS "_e"
                                        )
                                    ) AS "user",
                                    "_root.ar.root.projectLeads.or.user.base"."github_user_id" AS "root.ar.root.projectLeads.or.user.pg.github_user_id"
                                FROM
                                    (
                                        SELECT
                                            *
                                        FROM
                                            "public"."registered_users"
                                        WHERE
                                            (
                                                (("_root.ar.root.projectLeads.base"."user_id") = ("id"))
                                                AND (
                                                    (
                                                        (("public"."registered_users"."id") = (('e274001a-ee50-4a87-a30b-32fb76b35709')::UUID))
                                                        OR (
                                                            (("public"."registered_users"."id") IS NULL)
                                                            AND ((('e274001a-ee50-4a87-a30b-32fb76b35709')::UUID) IS NULL)
                                                        )
                                                    )
                                                    OR ('true')
                                                )
                                            )
                                        LIMIT
                                            1
                                    ) AS "_root.ar.root.projectLeads.or.user.base"
                            ) AS "_root.ar.root.projectLeads.or.user" ON ('true')
                        ORDER BY
                            "root.ar.root.projectLeads.or.user.pg.github_user_id" ASC NULLS LAST
                    ) AS "_root.ar.root.projectLeads"
            ) AS "_root.ar.root.projectLeads" ON ('true')
            LEFT OUTER JOIN LATERAL (
                SELECT
                    COALESCE(JSON_AGG("projectSponsors"), '[]') AS "projectSponsors"
                FROM
                    (
                        SELECT
                            ROW_TO_JSON(
                                (
                                    SELECT
                                        "_e"
                                    FROM
                                        (
                                            SELECT
                                                "_root.ar.root.projectSponsors.or.sponsor"."sponsor" AS "sponsor",
                                                'ProjectsSponsors' AS "__typename"
                                        ) AS "_e"
                                )
                            ) AS "projectSponsors"
                        FROM
                            (
                                SELECT
                                    *
                                FROM
                                    "public"."projects_sponsors"
                                WHERE
                                    (("_root.base"."id") = ("project_id"))
                            ) AS "_root.ar.root.projectSponsors.base"
                            LEFT OUTER JOIN LATERAL (
                                SELECT
                                    ROW_TO_JSON(
                                        (
                                            SELECT
                                                "_e"
                                            FROM
                                                (
                                                    SELECT
                                                        "_root.ar.root.projectSponsors.or.sponsor.base"."id" AS "id",
                                                        'Sponsors' AS "__typename",
                                                        "_root.ar.root.projectSponsors.or.sponsor.base"."name" AS "name",
                                                        "_root.ar.root.projectSponsors.or.sponsor.base"."logo_url" AS "logoUrl",
                                                        "_root.ar.root.projectSponsors.or.sponsor.base"."url" AS "url"
                                                ) AS "_e"
                                        )
                                    ) AS "sponsor"
                                FROM
                                    (
                                        SELECT
                                            *
                                        FROM
                                            "public"."sponsors"
                                        WHERE
                                            (("_root.ar.root.projectSponsors.base"."sponsor_id") = ("id"))
                                        LIMIT
                                            1
                                    ) AS "_root.ar.root.projectSponsors.or.sponsor.base"
                            ) AS "_root.ar.root.projectSponsors.or.sponsor" ON ('true')
                    ) AS "_root.ar.root.projectSponsors"
            ) AS "_root.ar.root.projectSponsors" ON ('true')
            LEFT OUTER JOIN LATERAL (
                SELECT
                    JSON_BUILD_OBJECT(
                        'aggregate',
                        JSON_BUILD_OBJECT('count', COUNT(*), '__typename', 'ProjectGithubReposAggregateFields'),
                        '__typename',
                        COALESCE('ProjectGithubReposAggregate', (BOOL_OR('true'))::TEXT)
                    ) AS "githubReposAggregate",
                    COALESCE(JSON_AGG("githubRepos"), '[]') AS "githubRepos"
                FROM
                    (
                        SELECT
                            ROW_TO_JSON(
                                (
                                    SELECT
                                        "_e"
                                    FROM
                                        (
                                            SELECT
                                                "_root.ar.root.githubRepos.githubReposAggregate.base"."project_id" AS "projectId",
                                                "_root.ar.root.githubRepos.githubReposAggregate.base"."github_repo_id" AS "githubRepoId",
                                                "_root.ar.root.githubRepos.githubReposAggregate.or.repo"."repo" AS "repo",
                                                'ProjectGithubRepos' AS "__typename"
                                        ) AS "_e"
                                )
                            ) AS "githubRepos"
                        FROM
                            (
                                SELECT
                                    *
                                FROM
                                    "public"."project_github_repos"
                                WHERE
                                    (("_root.base"."id") = ("project_id"))
                            ) AS "_root.ar.root.githubRepos.githubReposAggregate.base"
                            LEFT OUTER JOIN LATERAL (
                                SELECT
                                    ROW_TO_JSON(
                                        (
                                            SELECT
                                                "_e"
                                            FROM
                                                (
                                                    SELECT
                                                        "_root.ar.root.githubRepos.githubReposAggregate.or.repo.base"."id" AS "id",
                                                        'GithubRepos' AS "__typename",
                                                        "_root.ar.root.githubRepos.githubReposAggregate.or.repo.base"."languages" AS "languages"
                                                ) AS "_e"
                                        )
                                    ) AS "repo"
                                FROM
                                    (
                                        SELECT
                                            *
                                        FROM
                                            "public"."github_repos"
                                        WHERE
                                            (("_root.ar.root.githubRepos.githubReposAggregate.base"."github_repo_id") = ("id"))
                                        LIMIT
                                            1
                                    ) AS "_root.ar.root.githubRepos.githubReposAggregate.or.repo.base"
                            ) AS "_root.ar.root.githubRepos.githubReposAggregate.or.repo" ON ('true')
                    ) AS "_root.ar.root.githubRepos.githubReposAggregate"
            ) AS "_root.ar.root.githubRepos.githubReposAggregate" ON ('true')
            LEFT OUTER JOIN LATERAL (
                SELECT
                    COALESCE(JSON_AGG("callerAsContributor"), '[]') AS "callerAsContributor"
                FROM
                    (
                        SELECT
                            ROW_TO_JSON(
                                (
                                    SELECT
                                        "_e"
                                    FROM
                                        (
                                            SELECT
                                                "_root.ar.root.callerAsContributor.base"."github_user_id" AS "githubUserId"
                                        ) AS "_e"
                                )
                            ) AS "callerAsContributor"
                        FROM
                            (
                                SELECT
                                    *
                                FROM
                                    "api"."projects_registered_contributors"
                                WHERE
                                    (
                                        (("_root.base"."id") = ("project_id"))
                                        AND (
                                            (("api"."projects_registered_contributors"."github_user_id") = (('595505')::BIGINT))
                                            OR (
                                                (("api"."projects_registered_contributors"."github_user_id") IS NULL)
                                                AND ((('595505')::BIGINT) IS NULL)
                                            )
                                        )
                                    )
                            ) AS "_root.ar.root.callerAsContributor.base"
                    ) AS "_root.ar.root.callerAsContributor"
            ) AS "_root.ar.root.callerAsContributor" ON ('true')
    ) AS "_root"