import React from 'react';

const Gallery = ({ data }) => {
  return (
    <div className="row">
      {data.map((image) => (
        <div key={image.id} className="col-md-4 mb-4">
          <div className="card">
            <img
              src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
              className="card-img-top"
              alt={image.title}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
