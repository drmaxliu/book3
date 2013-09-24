require 'spec_helper'

describe "marks/edit" do
  before(:each) do
    @mark = assign(:mark, stub_model(Mark,
      :highlight => "MyText"
    ))
  end

  it "renders the edit mark form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form", :action => marks_path(@mark), :method => "post" do
      assert_select "textarea#mark_highlight", :name => "mark[highlight]"
    end
  end
end
