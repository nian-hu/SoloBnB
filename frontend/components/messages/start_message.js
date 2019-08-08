import React from 'react';

// function fetchToWebsocket(route, bodyData) {
//   fetch(`${API_ROOT}/${route}`, {
//     method: 'POST',
//     headers: {
//       "Accept": "application/json",
//       "Content-Type": "application/json",
//       // Only, if we are saving JWT token in localStorage
//       "Authorization": `Bearer                                          ${localStorage.getItem("token")}`
// //              },
//             body: JSON.stringify(bodyData)
//     })
// }
// function handleClick() {
//   let body = {
//     title: "PRIVATE",
//     sender_id: props.user_sender_id,
//     receiver_id: props.user_receiver_id
//   };

//   // If the conversation already exists, execute exit function or do nothing. Otherwise, fetch conversation to WebSockets.
//   if (conversationExists(props.user_receiver_id)) {
//     props.exit();
//   }
//   else {
//     fetchToWebsocket("conversations", body);
//     props.exit();
//   }
// }; 