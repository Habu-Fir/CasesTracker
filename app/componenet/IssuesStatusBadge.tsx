import { Status } from '@prisma/client';
import { Badge } from '@radix-ui/themes';

const statusMap: Record<
  Status,
  {
    label: String;
    color: 'red' | 'violet' | 'green';
  }
> = {
  OPEN: { label: 'Open', color: 'red' },
  IN_PROGRESS: { label: 'In progress', color: 'violet' },
  CLOSED: { label: 'Closed', color: 'red' },
};

const CaseStatusBadge = ({ status }: { status: Status }) => {
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  );
};

export default CaseStatusBadge;
