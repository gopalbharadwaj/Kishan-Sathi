import { useState } from "react";
import DashboardLayout from "../../layout/DashboardLayout";
import { sendMessage } from "../../api/aiApi";

const CropDiagnosisPage = () => {

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "👋 Hello! I am your AI Farming Assistant. Ask me anything about crops, diseases, fertilizers, irrigation, pests, or farming."
    }
  ]);

  const handleImage = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    setImage(file);

    setPreview(
      URL.createObjectURL(file)
    );

  };

  const handleSend = async () => {

    if (!message.trim() && !image)
      return;

    const userContent = image
      ? `📷 Image Uploaded\n\n${message}`
      : message;

    setMessages(prev => [
      ...prev,
      {
        role: "user",
        content: userContent
      }
    ]);

    const currentMessage = message;

    setMessage("");

    try {

      setLoading(true);

      const response =
        await sendMessage(
          currentMessage
        );

      setMessages(prev => [
        ...prev,
        {
          role: "assistant",
          content:
            response.reply
        }
      ]);

      setImage(null);
      setPreview("");

    } catch (error) {

      console.log(error);

      setMessages(prev => [
        ...prev,
        {
          role: "assistant",
          content:
            "❌ AI service is unavailable right now."
        }
      ]);

    } finally {

      setLoading(false);

    }

  };

  return (

    <DashboardLayout>

      <div className="mb-6">

        <h1 className="text-4xl font-bold">

          AI Farming Assistant

        </h1>

        <p className="text-gray-500 mt-2">

          Ask anything about farming, crops, diseases, fertilizers and more.

        </p>

      </div>

      <div className="bg-white border rounded-3xl h-[78vh] flex flex-col">

        {/* Chat Area */}

        <div className="flex-1 overflow-y-auto p-6 space-y-4">

          {messages.map(
            (msg, index) => (

              <div
                key={index}
                className={`flex ${msg.role === "user"
                    ? "justify-end"
                    : "justify-start"
                  }`}
              >

                <div
                  className={`max-w-[75%] px-5 py-3 rounded-2xl whitespace-pre-wrap ${msg.role === "user"
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-800"
                    }`}
                >

                  {msg.content}

                </div>

              </div>

            )
          )}

          {loading && (

            <div className="bg-gray-100 px-5 py-3 rounded-2xl inline-block">

              🤖 AI is thinking...

            </div>

          )}

        </div>

        {/* Preview Image */}

        {preview && (

          <div className="px-6 pb-3">

            <img
              src={preview}
              alt="preview"
              className="w-40 h-40 object-cover rounded-xl border"
            />

          </div>

        )}

        {/* Input Area */}

        <div className="border-t p-4 flex gap-3">

          <label className="cursor-pointer bg-gray-200 px-4 py-3 rounded-xl flex items-center">

            📎

            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleImage}
            />

          </label>

          <input
            type="text"
            value={message}
            placeholder="Ask anything..."
            onChange={(e) =>
              setMessage(
                e.target.value
              )
            }
            onKeyDown={(e) =>
              e.key === "Enter" &&
              handleSend()
            }
            className="flex-1 border rounded-xl px-4 py-3 outline-none"
          />

          <button
            onClick={handleSend}
            disabled={loading}
            className="bg-green-600 text-white px-6 rounded-xl"
          >

            Send

          </button>

        </div>

      </div>

    </DashboardLayout>

  );

};

export default CropDiagnosisPage;