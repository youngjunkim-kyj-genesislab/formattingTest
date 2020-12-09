import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const withStyle = makeStyles({
  dialoging: {
    width: 400,
  },
  id: {
    color: 'red',
  },
  content: {
    color: 'green',
  },
});

const TabPanel = ({ children, value, index }) => {
  return <div hidden={value !== index}>{children}</div>;
};

const MaterialTest = () => {
  const [show, setShow] = useState(false);
  const [tab, setTab] = useState(1);
  const classes = withStyle();
  const handleChange = (event, newvalue) => {
    setTab(newvalue);
  };

  return (
    <div>
      <Button onClick={() => setShow(true)} variant='contained' color='primary'>
        모달
      </Button>
      <AppBar>
        <Tabs value={tab} onChange={handleChange}>
          <Tab id='1' style={{ 'aria-controls': `simple-tabpanel-1` }} label='1번 탭' />

          <Tab id='2' style={{ 'aria-controls': `simple-tabpanel-2` }} label='2번 탭' />

          <Tab disabled id='3' style={{ 'aria-controls': `simple-tabpanel-3` }} label='3번 탭' />
        </Tabs>
      </AppBar>
      <TabPanel value={tab} index={0}>
        1번탭내용
      </TabPanel>
      <TabPanel value={tab} index={1}>
        2번탭내용
      </TabPanel>
      <TabPanel value={tab} index={2}>
        3번탭내용
      </TabPanel>
      <Dialog
        // maxWidth='sm'
        classes={{
          paper: classes.dialoging,
        }}
        aria-labelledby='simple-dialog-title'
        open={show}
        onClose={() => setShow(false)}
      >
        <Button onClick={() => setShow(false)} variant='contained' color='primary'>
          Hello, World
        </Button>
        <div>
          <div className={classes.id}>아이디:</div>
          <div className={classes.content}>헬로웅</div>
        </div>
      </Dialog>
    </div>
  );
};

export default MaterialTest;
