import { instance } from "../hooks/instance"

export const deleteUser = (API,setIsLoading,navigate,setOpenModal,toast) => instance().delete(API).then(res => {
   setTimeout(() => {
    setIsLoading(false)
    navigate(-1)
    setOpenModal(false)
   }, 1000);
   setTimeout(() => {
    toast.success('yaxshi delite qilindi')
   }, 500);
})