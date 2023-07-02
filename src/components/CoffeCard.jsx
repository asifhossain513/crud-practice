import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

const CoffeCard = ({ coffee, coffees, setCoffees }) => {
  const { photo, name, chef, _id } = coffee;
  const handleViewDetails = _id => {
    
    console.log('View working', _id);
  };
  const handleEdit = _id => {
    
    console.log('View working', _id);
  };

  const handleDelete = (_id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
              const remainging = coffees.filter(coffee => coffee._id != _id);
              setCoffees(remainging)
            }
          });
      }
    });
  };
  return (
    <div className="card card-side bg-base-300 shadow-2xl p-2">
      <figure>
        <img src={photo} alt="coffee" />
      </figure>
      <div className="flex justify-between w-full p-4 ">
        <div>
          <h2 className="card-title">Name: {name}</h2>
          <h2 className="card-title">Chef: {chef}</h2>
          <h2 className="card-title">Price:</h2>
        </div>

        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical space-y-2">
            <button className="btn" onClick={() => handleViewDetails(_id)}>
              View
            </button>
            <Link to={`/updatecoffee/${_id}`}>
              <button className="btn" onClick={() => handleEdit(_id)}>
                Edit
              </button>
            </Link>

            <button
              className="btn bg-orange-400"
              onClick={() => handleDelete(_id)}
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeCard;
