const isAdmin = (user) => {
  return user === "hr"
}

const isWorker = (user) => {
  return user === "user"
}

export {isAdmin, isWorker}


