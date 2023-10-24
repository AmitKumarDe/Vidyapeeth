import { useDispatch } from "react-redux";
import PageHeader from "../PageHeader/PageHeader";

import { contactUs } from "../../../redux/slices/post/postSlice";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Swal from "sweetalert2";

const Contact = () => {
  const dispatch = useDispatch();

  const pageTitle = "Contact";
  const breadcrumbLinks = [
    { label: "Home", url: "/" },
    { label: "Contact", url: "/contact" },
  ];

  const contactSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    phone: z.string().min(10).max(20),
    message: z.string().min(10).max(1000),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // Add the reset function from react-hook-form
  } = useForm({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data) => {
    console.log(data);
    const postData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    };
    dispatch(contactUs({ postData }))
      .then((result) => {
        // Reset the form
        reset();
        // Show a SweetAlert
        if (result.payload && result.payload.success) {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Message sent successfully',
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to send message',
          });
        }
      });
  };



  return (
    <>
      <PageHeader pageTitle={pageTitle} breadcrumbLinks={breadcrumbLinks} />
      {/* Contact Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div
                className="bg-light d-flex flex-column justify-content-center px-5"
                style={{ height: 450 }}
              >
                <div className="d-flex align-items-center mb-5">
                  <div className="btn-icon bg-primary mr-4">
                    <i className="fa fa-2x fa-map-marker-alt text-white" />
                  </div>
                  <div className="mt-n1">
                    <h4>Our Location</h4>
                    <p className="m-0">123 Street, New York, USA</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-5">
                  <div className="btn-icon bg-secondary mr-4">
                    <i className="fa fa-2x fa-phone-alt text-white" />
                  </div>
                  <div className="mt-n1">
                    <h4>Call Us</h4>
                    <p className="m-0">+012 345 6789</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="btn-icon bg-warning mr-4">
                    <i className="fa fa-2x fa-envelope text-white" />
                  </div>
                  <div className="mt-n1">
                    <h4>Email Us</h4>
                    <p className="m-0">info@example.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="section-title position-relative mb-4">
                <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">
                  Need Help?
                </h6>
                <h1 className="display-4">Send Us A Message</h1>
              </div>
              <div className="contact-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-6 form-group">
                      <input
                        type="text"
                        className="form-control border-top-0 border-right-0 border-left-0 p-0"
                        placeholder="Your Name"
                        required="required"
                        {...register("name", { required: "Name is required" })}
                      />
                      {errors.name && (
                        <span style={{ color: "red" }}>
                          {errors.name.message}
                        </span>
                      )}
                    </div>
                    <div className="col-6 form-group">
                      <input
                        type="email"
                        className="form-control border-top-0 border-right-0 border-left-0 p-0"
                        placeholder="Your Email"
                        required="required"
                        {...register("email", {
                          required: "Email is required",
                        })}
                      />
                      {errors.email && (
                        <span style={{ color: "red" }}>
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="form-group">
                    <input
                      type="tel"
                      className="form-control border-top-0 border-right-0 border-left-0 p-0"
                      placeholder="Phone"
                      required="required"
                      {...register("phone", { required: "Phone is required" })}
                    />
                    {errors.phone && (
                      <span style={{ color: "red" }}>
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control border-top-0 border-right-0 border-left-0 p-0"
                      rows={5}
                      placeholder="Message"
                      required="required"
                      defaultValue={""}
                      {...register("message", {
                        required: "Message is required",
                      })}
                    />
                    {errors.message && (
                      <span style={{ color: "red" }}>
                        {errors.message.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <button className="btn btn-primary py-3 px-5" type="submit">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
    </>
  );
};
export default Contact;
