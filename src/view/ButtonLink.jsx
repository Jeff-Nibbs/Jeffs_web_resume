function ButtonLink({ href, children, external = true, size = 'default', className = '' }) {
  const padding = size === 'lg' ? 'py-3 px-4' : 'py-1 px-2 md:py-3 md:px-4'
  return (
    <a
      href={href}
      className={`nav4 flex justify-center items-center border-2 rounded ${padding} cursor-pointer text-sky-400 border-sky-500 hover:text-slate-100 hover:bg-sky-400 transition-colors ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  )
}

export default ButtonLink
