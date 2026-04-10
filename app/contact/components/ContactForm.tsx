"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const initialFormState: ContactFormData = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const [form, setForm] = useState<ContactFormData>(initialFormState);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Message sent successfully!", {
        description: "We'll get back to you shortly.",
      });
      setForm(initialFormState);
      setSubmitting(false);
    }, 800);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            name="firstName"
            placeholder="John"
            required
            maxLength={100}
            value={form.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            name="lastName"
            placeholder="Doe"
            required
            maxLength={100}
            value={form.lastName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="john@example.com"
          required
          maxLength={255}
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          name="subject"
          placeholder="How can we help?"
          required
          maxLength={200}
          value={form.subject}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your message..."
          required
          maxLength={2000}
          rows={5}
          value={form.message}
          onChange={handleChange}
        />
      </div>
      <Button
        type="submit"
        className="w-full rounded-full"
        size="lg"
        disabled={submitting}
      >
        {submitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
