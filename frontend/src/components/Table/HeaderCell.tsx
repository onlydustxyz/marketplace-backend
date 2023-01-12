import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
  onClick?: () => void;
}

export const HeaderCell: React.FC<Props> = ({ className, onClick, children }) => {
  return (
    <th scope="col" className={`text-left h-full ${className}`} onClick={onClick}>
      <div className="h-4 mb-2 flex items-center space-x-1">{children}</div>
    </th>
  );
};

export default HeaderCell;