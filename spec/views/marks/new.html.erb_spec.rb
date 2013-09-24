require 'spec_helper'

describe "marks/new" do
  before(:each) do
    assign(:mark, stub_model(Mark,
      :highlight => "MyText"
    ).as_new_record)
  end

  it "renders new mark form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form", :action => marks_path, :method => "post" do
      assert_select "textarea#mark_highlight", :name => "mark[highlight]"
    end
  end
end
