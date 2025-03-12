import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Button, Typography } from "@material-tailwind/react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import CustomFormFiled from "../../english/components/sub-components/CustomFormFiled";
import { Textarea } from "../../components/ui/textarea";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const location = [10.5611937, 27.3402381];

const schema = z.object({
  firstName: z.string().nonempty("First name is required"),
  lastName: z.string().nonempty("Last name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().nonempty("Message is required"),
});

const Contact = () => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  return (
    <div
      className="flex w-full flex-col bg-white relative top-[555px] "
      id="contact"
    >
      <section className="px-8 py-8 lg:py-16">
        <div className="container mx-auto text-center">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl ">
              Contact Us
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              We would love to hear from you!
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
            <div className="z-10 rounded-lg overflow-clip ">
              <MapContainer
                center={location}
                zoom={13}
                style={{ height: "430px", width: "100%" }}
              >
                {/* TileLayer renders the map tiles from OpenStreetMap */}
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {/* Marker pin at the specified location */}
                <Marker position={location}>
                  <Popup>Our Location</Popup>
                </Marker>
              </MapContainer>
            </div>
            <Form {...form}>
              <form
                action="https://formspree.io/f/xvgkodov"
                method="POST"
                className="space-y-8"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <Typography
                      variant="small"
                      className="mb-2 font-medium !text-gray-900 text-start"
                    >
                      FirstName
                    </Typography>
                    <CustomFormFiled
                      name="firstName"
                      label="First Name"
                      control={form.control}
                      className="border-none"
                    />
                  </div>

                  <div className="flex flex-col">
                    <Typography
                      variant="small"
                      className="mb-2 font-medium !text-gray-900  text-start"
                    >
                      Last Name
                    </Typography>
                    <CustomFormFiled
                      name="lastName"
                      label="Last Name"
                      control={form.control}
                      className="border-none"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Typography
                    variant="small"
                    className="font-medium !text-gray-900 text-start"
                  >
                    Email
                  </Typography>
                  <CustomFormFiled
                    name="email"
                    label="Email"
                    control={form.control}
                    className="border-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Typography
                    variant="small"
                    className="text-start font-medium !text-gray-900"
                  >
                    Massage
                  </Typography>
                  <Textarea
                    name="message"
                    className="focus:border-[#637C65] rounded-lg hover:border-[#637C65] text-end"
                  />
                </div>
                <div className="flex w-full">
                  <Button
                    type="submit"
                    className="bg-[#1E1E1E] hover:bg-[#637C65] w-full"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
