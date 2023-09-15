const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="">
              <img src="https://i.ibb.co/232GcQN/twitter.png" alt="" />
            </a>
            <a href="">
            <img src="https://i.ibb.co/BcnMwj7/facebook.png" alt="" />
            </a>
            <a href="">
              <img src="https://i.ibb.co/5sh0mdm/insta.png" alt="" />
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
