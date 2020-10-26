define(['firebase-admin'], (admin) => ({
  add: (name) => {
    admin.firestore()
      .collection('authors')
      .add({ name })
  }
}))