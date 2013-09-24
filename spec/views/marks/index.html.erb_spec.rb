require 'spec_helper'

describe "marks/index" do
  before(:each) do
    assign(:marks, [
      stub_model(Mark,
        :highlight => "MyText"
      ),
      stub_model(Mark,
        :highlight => "MyText"
      )
    ])
  end

  it "renders a list of marks" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
  end
end
