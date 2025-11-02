import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getCartDraft } from "../modules/chargingApi"
import { setCartDataAction, setLoadingAction } from "../slices/chargingCartSlices"

export function useCartData() {
  const dispatch = useDispatch()

  const loadCartData = async () => {
    dispatch(setLoadingAction(true))
    try {
      const data = await getCartDraft()
      dispatch(setCartDataAction(data))
    } catch (err) {
      // значения по умолчанию
      dispatch(setCartDataAction({ id: -1, amount_of_orders: 0 }))
    } finally {
      dispatch(setLoadingAction(false))
    }
  }

  useEffect(() => {
    loadCartData()
  }, [])

  return { loadCartData }
}