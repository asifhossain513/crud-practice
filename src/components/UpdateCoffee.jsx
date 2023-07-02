import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
  const loadedCoffe = useLoaderData();

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffeeInfo = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Update it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${loadedCoffe._id}`, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(updatedCoffeeInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire('Updated!', 'Your file has been deleted.', 'success');
          });
      }
    });

    console.log(updatedCoffeeInfo);
  };
  return (
    <div>
      <h1 className="text-center">Update Details</h1>
      <div className="p-24 bg-[#f4f3f0]">
        <form onSubmit={handleUpdateCoffee}>
          {/* Form Row for Coffee name */}
          <div className="md:flex mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  defaultValue={loadedCoffe.name}
                  placeholder="Enter your coffee name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text">Chef</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="chef"
                  defaultValue={loadedCoffe.chef}
                  placeholder="Enter coffee chef"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* Form Row Supplier*/}
          <div className="md:flex mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="supplier"
                  defaultValue={loadedCoffe.supplier}
                  placeholder="Enter coffee supplier"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="taste"
                  defaultValue={loadedCoffe.taste}
                  placeholder="Enter coffee taste"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* Form Row */}
          <div className="md:flex mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  defaultValue={loadedCoffe.category}
                  placeholder="Enter coffee category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="details"
                  defaultValue={loadedCoffe.details}
                  placeholder="Enter coffee Details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="mb-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  defaultValue={loadedCoffe.photo}
                  placeholder="Enter the Photo Url"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input type="submit" value="Add Coffe" className="btn btn-block" />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
