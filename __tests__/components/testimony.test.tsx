import { screen, render } from '@testing-library/react';
import Testimony from '@/components/testimony';

describe('Testimony', () => {
  const TestimonyComponent = () => {
    return (
      <Testimony.Root>
        <Testimony.Content>
          <Testimony.Text>Testimony</Testimony.Text>
        </Testimony.Content>

        <Testimony.Author>
          <Testimony.Image src='/images/author.jpg' alt='Author' />
          <Testimony.AuthorInformations>
            <Testimony.Name>Author</Testimony.Name>
            <Testimony.Sub>Role</Testimony.Sub>
          </Testimony.AuthorInformations>
        </Testimony.Author>
      </Testimony.Root>
    );
  };

  it('should render the component', () => {
    render(<TestimonyComponent />);
    expect(screen.getByText('Testimony')).toBeVisible();
    expect(screen.getByText('Author')).toBeVisible();
    expect(screen.getByText('Role')).toBeVisible();
    expect(screen.getByRole('img')).toBeVisible();
  });
});
