export const fetchMessages = id => {
  return $.ajax({
    method: 'GET',
    url: `api/chatroom/${id}/messages`
  })
}