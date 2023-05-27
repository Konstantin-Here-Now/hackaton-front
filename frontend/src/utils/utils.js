const isUserAdmin = userUid => {
  const adminUid = "DhGgJE2qRTXIKgYhklqCruM3oxU2"

  return userUid === adminUid
}

const isAdmin = (user) => {
  return user === "admin"
}

export {isUserAdmin, isAdmin}


