import Button from "./Button";
import "./index.css";

export default function CustomButtons() {
  const handleClick = (variant) => {
    alert(`${variant} button clicked!`);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Button Component Demo
      </h1>

      <div className="space-y-6">
        {/* Basic variants */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Button Variants
          </h2>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" onClick={() => handleClick("Primary")}>
              Primary
            </Button>
            <Button
              variant="secondary"
              onClick={() => handleClick("Secondary")}
            >
              Secondary
            </Button>
            <Button variant="outline" onClick={() => handleClick("Outline")}>
              Outline
            </Button>
            <Button variant="danger" onClick={() => handleClick("Danger")}>
              Danger
            </Button>
            <Button variant="success" onClick={() => handleClick("Success")}>
              Success
            </Button>
            <Button variant="ghost" onClick={() => handleClick("Ghost")}>
              Ghost
            </Button>
          </div>
        </div>

        {/* Disabled states */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Disabled States
          </h2>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" disabled>
              Disabled Primary
            </Button>
            <Button variant="secondary" disabled>
              Disabled Secondary
            </Button>
            <Button variant="outline" disabled>
              Disabled Outline
            </Button>
            <Button variant="danger" disabled>
              Disabled Danger
            </Button>
          </div>
        </div>

        {/* Interactive example */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Interactive Example
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <p className="text-gray-600 mb-4">
              These buttons demonstrate the onClick functionality:
            </p>
            <div className="flex gap-3">
              <Button
                variant="primary"
                onClick={() => alert("Form submitted!")}
              >
                Submit Form
              </Button>
              <Button
                variant="outline"
                onClick={() => alert("Action cancelled!")}
              >
                Cancel
              </Button>
              <Button
                variant="danger"
                onClick={() =>
                  confirm("Are you sure you want to delete this item?")
                }
              >
                Delete Item
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
