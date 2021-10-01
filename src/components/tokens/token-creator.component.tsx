import { useCallback, useState } from 'react';
import Button from '@mui/material/Button';
import { tokenService } from '../../services';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export const TokenCreator = () => {
  const [token, setToken] = useState<string>();

  const getToken = useCallback(() => {
    if (token) {
      return token;
    }

    const jwtToken = tokenService.getJwtToken();
    console.log('🚀 - getToken - jwtToken', jwtToken);
    setToken(jwtToken);
  }, [token]);

  const onGetTokenClick = () => {
    getToken();
  };

  return (
    <div className="token">
      <h2>Token</h2>
      <Box sx={{ flexGrow: 1 }} px={2}>
        <Grid container spacing={2} alignContent="left" alignItems="left">
          <Grid item xs={4}>
            <TextareaAutosize
              minRows={4}
              maxRows={10}
              value={token}
              style={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={2}>
            <Button onClick={onGetTokenClick} variant="contained">
              Get Token
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
