
const BillInput = (props : any) => {

  return (
    <div className="pb-12">
            <label
              htmlFor="bill"
              className="block text-DarkGrayishCyan lg:text-md text-sm lg:text-md mb-2"
              >Bill</label
            >
            <label
              className="relative before:absolute before:left-6 before:top-0 before:bottom-0 before:w-10 before:mr-2 before:bg-[url('/images/icon-dollar.svg')] before:bg-no-repeat"
            ></label>
            <input
              value={props.bill}
              onChange={props.billInputHandler}
              type="number"
              className="bg-gray-100 text-lg py-3 px-5 w-full text-end rounded-lg border-2 border-solid border-gray-100 focus:border-StrongCyan focus:border-2 focus:border-solid focus:shadow-sm focus:shadow-VeryDarkCyan focus:outline-none caret-StrongCyan"
              required
            />
          </div>
  )
}

export default BillInput
