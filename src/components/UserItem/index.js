import './index.css'

const UserItem = props => {
  const {datas} = props
  const {
    title,
    first,
    second,
    email,
    snumber,
    sname,
    city,
    state,
    country,
    postcode,
  } = datas

  return (
    <div className="card-container">
      <div className="card-items">
        <div className="photo">Photo</div>
        <hr className="line" />
        <div className="details">
          <div className="name_set">
            <h1 className="name">
              {title} {first}
            </h1>
            <h1 className="name">{second}</h1>
          </div>

          <p className="datas">{email}</p>
          <p className="datas">
            {snumber},{sname},{city},{state},{country},{postcode}
          </p>
        </div>
      </div>
    </div>
  )
}

export default UserItem
