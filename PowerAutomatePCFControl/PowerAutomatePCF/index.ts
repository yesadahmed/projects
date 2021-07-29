import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class PowerAutomatePCF implements ComponentFramework.StandardControl<IInputs, IOutputs> {
	private _container: HTMLDivElement;
	private _divFlexBox: HTMLDivElement;
	// Reference to ComponentFramework Context object
	private _context: ComponentFramework.Context<IInputs>;
	private _accessToken: string;
	/**
	 * Empty constructor.
	 */
	constructor() {

	}

	/**
	 * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
	 * Data-set values are not initialized here, use updateView.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
	 * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
	 * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
	 * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
	 */
	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement): void {
		// Add control initialization code
		this._context = context;
		this._container = document.createElement("div");
		//create signin button
		var btnSiginIn = document.createElement('button');
		btnSiginIn.innerHTML = 'SignIn';
		btnSiginIn.addEventListener("click", function () {
			alert("SignIn is clicked");
		});
		btnSiginIn.setAttribute("id", "SignIn");
		btnSiginIn.setAttribute("class", "btn success");
		this._container.appendChild(btnSiginIn);

		// create span
		var spantag = document.createElement('span');
		var brtag = document.createElement("br");
		spantag.appendChild(brtag);
		this._container.appendChild(spantag);
		//flow div
		var flowcontents = document.createElement('div');
		flowcontents.setAttribute("id", "flowcontents");
		flowcontents.style.display = 'inline';//at first

		//btnLoadFlows
		var btnLoadFlows = document.createElement('button');
		btnLoadFlows.innerHTML = 'My Flows';
		btnLoadFlows.addEventListener("click", function () {
			alert("btnLoadFlows is clicked");
		});
		btnLoadFlows.setAttribute("id", "btnLoadFlows");		
		flowcontents.appendChild(btnLoadFlows);

		//btnLoadTemplates
		var btnLoadTemplates = document.createElement('button');
		btnLoadTemplates.innerHTML = 'My Flows';
		btnLoadTemplates.addEventListener("click", function () {
			alert("btnLoadTemplates is clicked");
		});
		btnLoadTemplates.setAttribute("id", "btnLoadTemplates");
		flowcontents.appendChild(btnLoadTemplates);

		//flowsDiv
		var flowsDiv = document.createElement('div');
		flowsDiv.setAttribute("id", "flowsDiv");
		flowsDiv.setAttribute("class", "flowContainer");
		flowcontents.appendChild(flowsDiv);

		//pretag
		var pretag = document.createElement('pre');
		pretag.setAttribute("id", "json");
		flowcontents.appendChild(pretag);

		
		//base container
		this._container.appendChild(flowcontents);
		container.appendChild(this._container);//last


	}


	/**
	 * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
	 */
	public updateView(context: ComponentFramework.Context<IInputs>): void {
		// Add code to update control view



	}

	/**
	 * It is called by the framework prior to a control receiving new data.
	 * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
	 */
	public getOutputs(): IOutputs {
		return {};
	}

	/**
	 * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
	 * i.e. cancelling any pending remote calls, removing listeners, etc.
	 */
	public destroy(): void {
		// Add code to cleanup control if necessary
	}

}
