const url = 'https://5ef708e42c0f2c0016949ebe.mockapi.io/image'

export async function fetchData() {
  return await fetch(url)
    .then(response => {
      return (
        response.json()
      )
    })
}

