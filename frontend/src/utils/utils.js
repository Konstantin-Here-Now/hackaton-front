const isUserAdmin = userUid => {
  const adminUid = "DhGgJE2qRTXIKgYhklqCruM3oxU2"

  return userUid === adminUid
}

export {isUserAdmin}
