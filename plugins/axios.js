export default function({ $axios, store, redirect }) {
  $axios.onError(error => {
    // Check if error status 422 and dispatch store set error action
    if (error.response.status === 422) {
      store.dispatch('validation/setErrors', error.response.data.errors)

      // then redirect user to login page
      // return redirect('/login')
    }

    // And reject the request using promise
    return Promise.reject(error)
  })

  $axios.onRequest(() => {
    store.dispatch('validation/clearErrors')
  })
}
