export default function ImageModal({ children, isOpen, closeModal }) {
  const handleCloseModal = e => e.stopPropagation()

  return (
    <div className={`${isOpen ? "absolute" : "hidden"} w-full h-screen flex justify-center items-center top-0 left-0 bg-[#000000cc] z-[100]`} onClick={closeModal}>
      <div className="relative" onClick={handleCloseModal}>
        {children}
      </div>
    </div>
  )
}