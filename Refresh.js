const { useEffect } = require('react')

const Refresh = () => {
  useEffect(() => {
    location.reload()
  }, [])
  return null
}
