import { useEffect } from 'react'

function useScrollLock(isLock: boolean) {
  useEffect(() => {
    if (isLock) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = ""
    }

    return () => {
      document.body.style.overflowY = ""
    }
  }, [isLock])
}

export {
  useScrollLock
}