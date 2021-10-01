import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export const Loader = () => {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rectangular" height={50} />
      <Skeleton variant="rectangular" height={1} />
      <Skeleton variant="rectangular" height={50} />
      <Skeleton variant="rectangular" height={1} />
    </Stack>
  );
};
