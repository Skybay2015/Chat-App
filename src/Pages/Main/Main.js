import React from 'react';
import { Grid, Typography, Modal } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { Wrapper } from '../../Components/Wrapper';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.sass';
import { ChatPreview } from '../../Components/ChatPreview';
import { hideModal } from '../../store/actions/actionCreators';
import { RegistrationForm } from '../../Components/Forms/RegistrationForm';
import { LogInForm } from '../../Components/Forms/LogInForm';

const chatsCollection = [
   {
      category: 'Sport',
      chats: [
         { title: 'Sportsmen', id: 1 },
         { title: 'Sportsmen', id: 2 },
         { title: 'Sportsmen', id: 3 },
         { title: 'Sportsmen', id: 4 },
      ],
   },
   {
      category: 'Fish',
      chats: [
         { title: 'Sportsmen', id: 1 },
         { title: 'Sportsmen', id: 2 },
         { title: 'Sportsmen', id: 3 },
         { title: 'Sportsmen', id: 4 },
      ],
   },
   {
      category: 'Cars',
      chats: [
         { title: 'Sportsmen', id: 1 },
         { title: 'Sportsmen', id: 2 },
         { title: 'Sportsmen', id: 3 },
         { title: 'Sportsmen', id: 4 },
      ],
   },
   {
      category: 'Football',
      chats: [
         { title: 'Sportsmen', id: 1 },
         { title: 'Sportsmen', id: 2 },
         { title: 'Sportsmen', id: 3 },
         { title: 'Sportsmen', id: 4 },
      ],
   },
   {
      category: 'Girls',
      chats: [
         { title: 'Sportsmen', id: 1 },
         { title: 'Sportsmen', id: 2 },
         { title: 'Sportsmen', id: 3 },
         { title: 'Sportsmen', id: 4 },
      ],
   },
];

const Main = () => {
   const dispatch = useDispatch();
   const isModalOpen = useSelector((state) => state.app.isModalOpen);

   const isRegistrationForm = useSelector(
      (state) => state.app.isRegistrationForm,
   );

   return (
      <>
         <div className={styles.Main_banner}>
            <Wrapper>
               <Grid container justify='center' alignItems='center'>
                  <Typography
                     variant='h3'
                     text='center'
                     className={styles.Main_title}
                     gutterBottom>
                     Chat App - общайтесь на любую тему
                  </Typography>
                  <Typography
                     className={styles.Main_subtitle}
                     variant='h5'
                     text='center'>
                     Создайте свой чат, найдите чат для себя и все это бесплатно
                     и без рекламы
                  </Typography>
               </Grid>
            </Wrapper>
         </div>

         <div className={styles.Main_chats}>
            <Wrapper>
               <Grid container justify='center' spacing={10}>
                  {chatsCollection.map((chatItem, index) => {
                     return (
                        <ChatPreview
                           key={index}
                           chats={chatItem.chats}
                           category={chatItem.category}
                        />
                     );
                  })}
               </Grid>
            </Wrapper>
         </div>
         {isModalOpen && (
            <Modal
               open
               className={styles.Modal}
               onEscapeKeyDown={() => dispatch(hideModal())}
               onBackdropClick={() => dispatch(hideModal())}>
               <div className={styles.FormContainer}>
                  <HighlightOffIcon
                     className={styles.CloseBtn}
                     color='action'
                     fontSize='large'
                     onClick={() => dispatch(hideModal())}
                  />
                  {isRegistrationForm ? <RegistrationForm /> : <LogInForm />}
               </div>
            </Modal>
         )}
      </>
   );
};

export default Main;
