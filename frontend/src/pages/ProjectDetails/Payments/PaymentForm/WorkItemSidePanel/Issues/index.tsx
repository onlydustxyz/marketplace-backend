import { differenceBy } from "lodash";
import { useMemo } from "react";
import { WorkItem } from "src/components/GithubIssue";
import IssuesView from "./IssuesView";
import PullRequestsView from "./PullRequestsView";
import useUnpaidIssues, { IssueType } from "./useUnpaidIssues";

type Props = {
  type: IssueType;
  projectId: string;
  contributorHandle: string;
  workItems: WorkItem[];
  onWorkItemAdded: (workItem: WorkItem) => void;
};

export default function Issues({ type, projectId, contributorHandle, workItems, onWorkItemAdded }: Props) {
  const { data: unpaidIssues, loading } = useUnpaidIssues({ projectId, filters: { author: contributorHandle, type } });

  const issues: WorkItem[] = useMemo(() => differenceBy(unpaidIssues, workItems, "id"), [unpaidIssues, workItems]);

  return (
    <>
      {type === IssueType.PullRequest && (
        <PullRequestsView
          workItems={issues}
          onWorkItemAdded={onWorkItemAdded}
          query={{
            data: unpaidIssues,
            loading,
          }}
        />
      )}
      {type === IssueType.Issue && (
        <IssuesView
          workItems={issues}
          onWorkItemAdded={onWorkItemAdded}
          query={{
            data: unpaidIssues,
            loading,
          }}
        />
      )}
    </>
  );
}