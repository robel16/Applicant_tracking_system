import { useState, useRef, useEffect } from "react";
import InputFields from "../../components/input-field/input-field.component";
import TextInput from "../../components/text-input/text-input.component";
import CreateIcon from "../../components/create-icon/create-icon.component";
import Button from "../../components/Button/button.component";
// import "./create-job.style.scss";
import { FaRegTimesCircle } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import SelectInput from "../../components/select-input/select.component";
import DeleteIcon from "../../components/delete-icon/delete-icon.component";

const DEFAULT_STEP = { text: "", type: "" };
let DEFAULT_BASIC = { inputTitle: "", final_message: "", current_status: "" };
const DEFAULT_INPUT = {
  title: "",
  steps: [DEFAULT_STEP, ""],
};

const CreateJob = () => {
  let input = useLocation();
  let { steps, title, status } = input.state || DEFAULT_INPUT;

  const finalMessage = steps[steps.length - 1];
  DEFAULT_BASIC = {
    ...DEFAULT_BASIC,
    inputTitle: title,
    final_message: finalMessage,
  };
  const [basicInput, setBasicInput] = useState(DEFAULT_BASIC);
  const [currentStatus, setCurrentStatus] = useState(status);
  const [inputSteps, setInputSteps] = useState(steps);
  const [draggable, setDraggable] = useState(false);
  const { inputTitle, final_message } = basicInput;
  let draggedItem = useRef();
  let draggedNode = useRef();

  //input handlers
  const textInputHandler = (event, i) => {
    inputSteps[i] = { ...inputSteps[i], text: event.target.value };

    setInputSteps([...inputSteps]);
  };
  const selectInputHandler = (event, i) => {
    inputSteps[i] = { ...inputSteps[i], type: event.target.value };

    setInputSteps([...inputSteps]);
  };
  const basicInputHandler = (event) => {
    const { name, value } = event.target;
    setBasicInput({ ...basicInput, [name]: value });
  };

  const statusHandler = (event) => {
    setCurrentStatus(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    inputSteps[inputSteps.length - 1] = {
      text: final_message.text || final_message,
      type: "finished",
    };
    const formData = {
      title: inputTitle,
      steps: [...inputSteps],
      status: currentStatus || "disapproved",
    };
    console.log(formData);
  };
  //
  //add and remove Steps Handler
  const addStep = () => {
    inputSteps.splice(inputSteps.length - 1, 0, DEFAULT_STEP);
    setInputSteps([...inputSteps]);
  };
  const removeStepHandler = (event, i) => {
    setInputSteps(
      inputSteps.filter((step, index) => {
        if (index !== i) {
          return step;
        }
      })
    );
  };
  //
  //drag handlers
  const handleDragStart = (e, i) => {
    setTimeout(() => {
      setDraggable(true);
      draggedItem.current = i;
      draggedNode.current = e.target;
      draggedNode.current.addEventListener("dragend", handleDragEnd);
    }, 0);
  };

  const handleDragEnter = (e, i) => {
    let item = draggedItem.current;
    let temp;
    temp = inputSteps[i];
    inputSteps[i] = inputSteps[item];
    inputSteps[item] = temp;
    draggedItem.current = i;
    setInputSteps([...inputSteps]);
  };
  const handleDragEnd = () => {
    draggedItem.current = null;
    draggedNode.current = null;
    setDraggable(false);
  };
  const dragStyle = (i) => {
    if (i === draggedItem.current) {
      return "dragged";
    }
    return "step";
  };

  return (
    <div className="create-job-scrollbars flex flex-col ">
      <div className="create-job-containers flex flex-col  mt-2 mr-3 mb-2 ml-14 p-4 w-[calc(75vw)] h-[calc(95vh)] ">
        <h1
          className="mt-2 text-center font-semibold text-2xl 
          m-7
         "
        >
          {title ? "Edit Job/" + title : "Create Job"}
        </h1>
        {title && (
          <div className="edit-delete-icon-containers xl:relative  sm:float-right xl:right-5 xl:self-end">
            <DeleteIcon />
          </div>
        )}
        <form onSubmit={submitHandler}>
          <div className="create-job-titles w-70   ">
            <div className="h33 font-semibold p-2">Job Title</div>
            <TextInput
              name="inputTitle"
              value={inputTitle}
              onChange={basicInputHandler}
            />
          </div>
          <div>
            <div className="create-job-stepss flex    ">
              <div className="  flex items-center  ">
                <div
                  className="h33
            top-0 mr-[80%] mb-0 xl:text-2xl sm:text-xl sm:font-semibold "
                >
                  Steps
                </div>
                <div className="createIcons  mt-2  " onClick={addStep}>
                  <CreateIcon buttonType="outlines  flex items-center justify-center  w-5    h-5 border bg-cust-secondary hover:bg-cust-primary cursor-pointer border-solid border-black rounded-full   bg-white    [&>*]:hover:text-cust-secondary" />
                </div>
              </div>
            </div>

            <div className="stepss flex flex-col ms-2 me-0 p-1">
              {inputSteps.map((step, i) => {
                if (i !== inputSteps.length - 1) {
                  return (
                    <div
                      className={
                        draggable
                          ? dragStyle(i)
                          : "steps inline-flex m-2 relative"
                      }
                      draggable={true}
                      onDragStart={(event) => handleDragStart(event, i)}
                      onDragEnter={(event) => handleDragEnter(event, i)}
                      key={i}
                    >
                      <InputFields
                        textInputHandler={textInputHandler}
                        selectInputHandler={selectInputHandler}
                        step={step}
                        label={i}
                      />
                      <div className="remove-icons absolute    ">
                        {i !== 0 && (
                          <FaTrashAlt
                            className="minus-icons text-2xl text-red-700 h-5 w-5 cursor-pointer transform transition duration-300 hover:scale-125 -m-5 ml-3"
                            onClick={(event) => removeStepHandler(event, i)}
                          />
                        )}
                      </div>
                    </div>
                  );
                }
              })}

              <div className="final-messages mt-[3%] sm:w-1/3">
                <TextInput
                  placeholder="Final Message"
                  name="final_message"
                  onChange={basicInputHandler}
                  value={title ? final_message.text : final_message}
                />
              </div>
              <div className="edit-status block xl:self-end relative xl:right-52   font-Quicksand md:self-center sm:self-end">
                {status && (
                  <div className="edit-status-containers flex pt-1 pr-2 pb-1 pl-2 text-2xl ">
                    <div className="edit-status-texts ms-0 me-2 text-[#696262]">
                      Status:{" "}
                    </div>
                    <SelectInput
                      selected_type="status_types"
                      selected={currentStatus}
                      selectInputHandler={statusHandler}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="submit-buttons ms-[4%] me-2">
              <Button
                type="submit"
                buttonType="w-24 h-8 border  border-solid border-black rounded-md text-xl bg-gradient-to-r bg-white hover hover:translate-y-0.5 hover:from-cust-primary hover:to-cust-secondary-darken hover:drop-shadow-2xl mb-6 "
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreateJob;
