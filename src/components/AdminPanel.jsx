function AdminPanel() {
  return (
    <div>
      <>
        <div class="container">
          <div class="d-flex justify-content-between">
            <div class="col-6">
              <h1>Articulos del Blog</h1>
            </div>
            <div class="col-1">
              <a href="/panel/admin/new" class="btn btn-success">
                Nuevo
              </a>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="table-responsive">
            <table class="table table-striped table-hover table-bordered">
              <thead>
                <tr class="table-secondary">
                  <th scope="col">Id</th>
                  <th scope="col" class="text-center">
                    Title
                  </th>
                  <th scope="col" class="text-center">
                    Content
                  </th>
                  <th scope="col" class="text-center">
                    Image
                  </th>
                  <th scope="col" class="text-center">
                    Created at
                  </th>
                  <th scope="col" class="text-center">
                    Author
                  </th>
                  <th scope="col" class="text-center">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr class="align-middle">
                  <th>
                    <p>Hola</p>
                  </th>
                  <td>
                    <p>
                      <a class="text-reset text-decoration-none" href="/hola">
                        hola
                      </a>
                    </p>
                  </td>
                  <td></td>

                  <td>
                    <img
                      src="https://www.igaxes.org/wp-content/uploads/2018/04/img-default-539x303.jpg"
                      alt="imagendefault"
                      width="200"
                      height="200"
                    />
                  </td>

                  <td>
                    <img
                      src="<%=article.img%>"
                      alt="imagen"
                      width="200"
                      height="200"
                    />
                  </td>

                  {/* <td><p><%=format(article.createdAt,"d/MM/yyyy HH:mm",{locale: es,})%></p></td> */}
                  <td>
                    <p>articleUserName</p>
                  </td>
                  <td>
                    <div class="text-center">
                      <a
                        href="/panel/admin/edit/<%=article.id%>"
                        class="btn btn-primary"
                      >
                        Editar
                      </a>
                    </div>
                    <div class="text-center pt-5">
                      <a
                        onclick=""
                        type="button"
                        href="/panel/admin/eliminar/<%=article.id%>"
                        class="btn btn-danger"
                        name="delete"
                        id="delete"
                      >
                        Eliminar
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    </div>
  );
}

export default AdminPanel;
