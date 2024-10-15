function Consultation() {
  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "56.25%",
        height: 0,
        overflow: "hidden",
        maxWidth: "100%",
        background: "#fff",
        marginTop: "12px",
      }}
    >
      <iframe
        src="https://calendly.com/thara-deepblue/30min?embed_domain=deepblue.com&embed_type=Inline&hide_gdpr_banner=1"
        style={{
          border: "none",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        allow="payment"
        scrolling="no"
        frameBorder="0"
      ></iframe>
    </div>
  );
}

export default Consultation;
