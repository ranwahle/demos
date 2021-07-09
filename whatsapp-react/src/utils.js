export function getChatUsersList(chat, usersContext) {
  return chat?.userIds.map(userId => {
    let fullUser = usersContext.allUsers[userId] || {};
    return fullUser.userName;
  }).join(', ');
}