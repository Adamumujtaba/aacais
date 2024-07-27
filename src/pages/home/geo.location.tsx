function GeoLocation() {
  return (
    <div>
      <div className="map">
        <div>
          <h3>Geographical Location Map</h3>
          <p>Our school is located in the beautiful city of Ganye, nestled in the heart of Adamawa state.</p>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.6084995409255!2d12.049559417443849!3d8.440050299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10f97dd73616fed1%3A0x836ea30f3ed14a62!2sModel%20Islamiyya%20Ganye!5e0!3m2!1sen!2sng!4v1681620334923!5m2!1sen!2sng"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="map"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
}

export default GeoLocation;
