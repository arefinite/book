const Filter = ({handleViewInChange,viewIn}) => {
  return (
    <section className='container mx-auto px-4 md:px-0 mt-8 flex gap-4 items-center'>
      <p>
        <strong>View In</strong>
      </p>

      <div className='flex gap-3'>
        <div className={`border px-3 py-1 rounded border-slate-800  cursor-pointer ${viewIn==='table' && 'bg-slate-800 text-white'}`} onClick={()=>handleViewInChange('table')}>
          Table View
        </div>
        <div className={`border px-3 py-1 rounded border-slate-800  cursor-pointer ${viewIn==='card' && 'bg-slate-800 text-white'}`} onClick={()=>handleViewInChange('card')}>
          Card View
        </div>
      </div>
    </section>
  )
}
export default Filter
