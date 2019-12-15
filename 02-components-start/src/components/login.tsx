import React from "react";

const Login = () => {
  return (
    <div className="container-fluid">
      <div className="hidden-xs col-sm-4">-</div>
        <div className="col-xs-12 col-sm-4 light">
          <h3 className="text-center">{"title"}</h3>
          <div className="alert alert-danger" role="alert">{"error"}</div>
            <form action="/login" method="post">
              <div className="form-group">
                <label htmlFor="username">Όνομα μέλους</label>
                <input className="form-control" type="text" name="username" placeholder="Όνομα μέλους" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Κωδικός πρόσβασης</label>
                <input className="form-control" type="password" name="password" placeholder="Κωδικός πρόσβασης" />
            </div>
            <div className="form-group">
                <div className="form-group">
                    <div className="text-center">
                        <input className="btn btn-primary" type="submit" value="Σύνδεση" />
                    </div>
                </div>
            </div>
            </form>

        </div>

      <h1>LOGIN </h1>
      </div>
  )
}


export default Login