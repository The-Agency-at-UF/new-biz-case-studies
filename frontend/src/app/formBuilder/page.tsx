"use client";

import { useState } from "react";
import DynamicBlocks, { Block } from "./components/DynamicBlocks";

// Form page - TODO: update UI/design later to match Agency's theme
export default function FormPage() {
  // Creating states for title, tags, companies, case studies
  // Add more later
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [tags, setTags] = useState("");
  //Stores the case stuides as an array so users can pick multiple to be displayed
  const [caseStudies, setCaseStudies] = useState<string[]>([]);
  //Stores the dynamic content blocks
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<string | null>(null);

  // Handler for submitted form data
  // Sends the current form state to the backend. Note: image file uploads are not
  // implemented here yet.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitResult(null);
    setSubmitting(true);

    const formData = {
      title,
      company,
      tags: tags.split(",").map((t) => t.trim()),
      caseStudies,
      blocks,
    };

    // TODO: Send formData to backend API for storage instead
    // Note: File objects in blocks.content.imageFile cannot be serialized to JSON
    // Handle image file uploads separately when implementing S3 upload functionality
  
    console.log("Form submitted: ", formData);

    try {
      const res = await fetch("http://localhost:8080/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errBody = await res.json().catch(() => ({}));
        console.error("Submit failed", errBody);
        setSubmitResult("Submission failed. See console for details.");
        setSubmitting(false);
        return;
      }

      const data = await res.json().catch(() => ({}));
      console.log("Form submitted successfully:", data);
      setSubmitResult(`Created company ${data.companyID} template ${data.templateID}`);
      // To clear the form after submission
      setTitle("");
      setCompany("");
      setTags("");
      setCaseStudies([]);
      setBlocks([]);
    } catch (err) {
      console.error("Network error while submitting form:", err);
      setSubmitResult("Network error while submitting form. See console.");
    } finally {
      setSubmitting(false);
    }
  };

  // Render section
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 p-8 font-sans" style={{ backgroundColor: "#AB9BFF" }}>
      <header className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-bold">Agency NewBiz Form</h1>
      </header>

      <main className="w-full max-w-md bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-xl shadow-md p-6">
        {/* Connects submit handler to the event */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          {/* Title */} 
          <div> 
            <label 
              htmlFor="title" 
              className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-200" 
            > 
              Title 
              </label> 
              <input 
                id="title" 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Enter website title" 
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
              /> 
          </div>

          {/* Company Field */}
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-200"
            >
              Company
            </label>
            <input
              id="company"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Enter company client"
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Tags Field */}
          <div>
            <label
              htmlFor="tags"
              className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-200"
            >
              Tags (comma separated)
            </label>
            <input
              id="tags"
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="___, ___, ___"
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Case Studies Field */}
          <div>
            <label
              className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-200"
            >
              Case Studies (select all that apply)
            </label>
            <div className="flex flex-col gap-2 max-h-25 overflow-y-auto border rounded-md p-2 bg-gray-50">
              {/* Later, update with all our case studies */}
              {["Amazon", "Disney", "Uber", "AWS", "Lyft"].map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={option}
                    checked={caseStudies.includes(option)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setCaseStudies([...caseStudies, option]);
                      } else {
                        setCaseStudies(caseStudies.filter((item) => item !== option));
                      }
                    }}
                    className="accent-blue-600"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* Dynamic Blocks Field */}
          <div>
            <DynamicBlocks blocks={blocks} onBlocksChange={setBlocks} />
          </div>

          <button
            type="submit"
            disabled={submitting}
            aria-busy={submitting}
            className={`mt-2 ${submitting ? 'opacity-60 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} text-white font-semibold rounded-md py-2 transition-colors`}
            style={{ backgroundColor: "#5302D5" }}
          >
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
          {submitResult && (
            <div className="mt-3 text-sm text-gray-700">
              {submitResult}
            </div>
          )}
        </form>
      </main>
      {/* Footer */}
      <footer className="text-sm text-gray-500 dark:text-gray-400">
        <p>NewBiz Form Builder • The Agency</p>
      </footer>
    </div>
  );
}
