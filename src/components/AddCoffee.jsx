import Swal from 'sweetalert2';

const AddCoffee = () => {
  const handleAddCoffe = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffeInfo = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    console.log(newCoffeInfo);

    // Post

    fetch(`http://localhost:5000/addcoffee`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newCoffeInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Coffee added',
            icon: 'success',
            confirmButtonText: 'Close',
          });
        }
        form.reset()
      });
  };
  return (
    <div className="p-24 bg-[#f4f3f0]">
      <h1>Add Coffee</h1>
      <form onSubmit={handleAddCoffe}>
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
                placeholder="Enter the Photo Url"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Add Coffe" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddCoffee;
