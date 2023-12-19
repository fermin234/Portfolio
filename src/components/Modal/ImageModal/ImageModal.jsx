export default function ImageModal({ children, isOpen, closeModal }) {
  const handleCloseModal = e => e.stopPropagation()

  const body = document.getElementById("body")
  if (isOpen) {
    body.className = "overflow-y-hidden"
  } else {
    body.className = ""
  }

  return (
    <div className={`${isOpen ? "fixed" : "hidden"} w-full h-screen flex justify-center items-center top-0 left-0 bg-[#000000cc] z-[100]`} onClick={closeModal}>
      <div className="relative max-w-[90%] justify-center items-center flex" onClick={handleCloseModal}>
        <button onClick={() => closeModal()} className="absolute top-0 right-0 text-5xl z-[100] bg-white p-3 font-Montserrat hover:opacity-100 opacity-25"> x </button>
        {children}
      </div>
    </div>
  )
}