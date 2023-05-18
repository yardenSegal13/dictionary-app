import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section>
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4 " key={index}>
                <a
                  href="https://images.pexels.com/photos/1912868/pexels-photo-1912868.jpeg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={photo.src.portrait}
                    className="img-fluid"
                    alt={photo.alt}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
