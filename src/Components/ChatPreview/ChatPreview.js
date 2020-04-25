import React from 'react';
import { List, ListItemText, ListItem, Grid } from '@material-ui/core';
import styles from './styles.module.sass';

const ChatPreview = ({ category, chats }) => {
   return (
      <Grid className={styles.Container} item md={3}>
         <h2 className={styles.Category}>{category}</h2>
         <List className={styles.List}>
            {chats.map((chat) => {
               return (
                  <ListItem divider button key={chat.id}>
                     <ListItemText
                        className={styles.ListItemText}
                        align='center'>
                        {chat.title}
                     </ListItemText>
                  </ListItem>
               );
            })}
         </List>
      </Grid>
   );
};

export default ChatPreview;
