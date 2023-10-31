import { Stack } from '@mui/system';
import { ThreeDots } from 'react-loader-spinner';

export const SpinnerLoading = () => {
  return (
    <Stack style={{ position: 'fixed', top: '50%', left: '50%' }}>
      <ThreeDots
        height="50"
        width="50"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Stack>
  );
};
